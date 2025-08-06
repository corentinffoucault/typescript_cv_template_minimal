import DurationGenerator from './DurationGenerator.js';
import type { Iso8601, Labels, Team, Work, Highlight } from '../../packages/json_cv_schema/src/type/Type.js';
import LinkGenerator from '../utils/LinkGenerator.js';

//TODO: rework the name
type NestedJob = {
    description?: string;
    name?: string;
    url?: string;
    jobs: PartJob[];
};
type PartJob = {
    location?: string;
    position?: string;
    startDate?: Iso8601;
    endDate?: Iso8601;
    summary?: string;
    team?: Team;
    highlights?: Highlight[];
    planguages?: string[];
    env?: string[];
    tools?: string[];
    method?: string[];
};

export default class SimplifyWorksGenerator {

    public generate(lang: Intl.LocalesArgument, works: Work[] = [], labels: Labels): string {
        if (works.length == 0) {
            return '';
        }
        const nestedWork = works.reduce((acc: NestedJob[], { description, name, url, ...rest }) => {
            const prev = acc[acc.length - 1];
            if (prev && prev.name === name) {
                prev.jobs.push(rest);
            } else {
                acc.push({ description, name, url, jobs: [rest] });
            }
            return acc;
        }, []);
        return `
        <div id="work">
        <h3>${labels.works}</h3>
        <div class="stackSimple">
          ${nestedWork.map(work => this.generateWork(lang, work)).join('')}
        </div>
      </div>`;
    }

    private generateWork(lang: Intl.LocalesArgument, job: NestedJob): string {
        const jobs = this.buildTimeLine(job.jobs);
        return `
              <article>
                <header>
                  <h4>${LinkGenerator.generate(job.url, job.name)}</h4>
                  <div class="meta">${job.description && `<div>${job.description}</div>`}</div>
                </header>
                <div class="timeline">
                  ${jobs.map(job => this.generateJob(lang, job)).join('')}
                </div>
              </article>
            `;
    }

    //TODO: rework this part
    private buildTimeLine(jobs: PartJob[]): PartJob[] {
        return jobs.reduce((acc: PartJob[], subJob: PartJob) => {
            let hasMelt = false;
            for (let element of acc) {
                if (subJob.position === element.position) {
                    if (subJob.endDate === element.startDate) {
                        element.startDate = subJob.startDate;
                        hasMelt = true;
                    } else if (subJob.startDate === element.endDate) {
                        element.endDate = subJob.endDate;
                        hasMelt = true;
                    }
                    break;
                }
            }
            if (!hasMelt) {
                acc.push({ position: subJob.position, startDate: subJob.startDate, endDate: subJob.endDate });
            }
            return acc;
        }, []);
    }

    private generateJob(lang: Intl.LocalesArgument, job: PartJob): string {
        return `
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>${job.position}</b>
                        </span>
                        ${job.startDate && `: ${DurationGenerator.print(lang, job.startDate, job.endDate)}`}
                    </div>
                </span>
            </div>`;
    }

}