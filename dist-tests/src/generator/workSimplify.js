import Duration from './Duration.js';
import LinkGenerator from '../utils/LinkGenerator.js';
export default class WorkSimplifyGenerator {
    static generate(works = [], labels) {
        if (works.length == 0) {
            return '';
        }
        const nestedWork = works.reduce((acc, { description, name, url, ...rest }) => {
            const prev = acc[acc.length - 1];
            if (prev && prev.name === name) {
                prev.jobs.push(rest);
            }
            else {
                acc.push({ description, name, url, jobs: [rest] });
            }
            return acc;
        }, []);
        return `
        <div id="work">
        <h3>${labels.works}</h3>
        <div class="stackSimple">
          ${nestedWork.map(WorkSimplifyGenerator.generateWork).join('')}
        </div>
      </div>`;
    }
    static generateWork(job) {
        const jobs = WorkSimplifyGenerator.buildTimeLine(job.jobs);
        return `
              <article>
                <header>
                  <h4>${LinkGenerator.generate(job.url, job.name)}</h4>
                  <div class="meta">${job.description && `<div>${job.description}</div>`}</div>
                </header>
                <div class="timeline">
                  ${jobs.map(WorkSimplifyGenerator.generateJob).join('')}
                </div>
              </article>
            `;
    }
    //TODO: rework this part
    static buildTimeLine(jobs) {
        return jobs.reduce((acc, subJob) => {
            let hasMelt = false;
            for (let element of acc) {
                if (subJob.position === element.position) {
                    if (subJob.endDate === element.startDate) {
                        element.startDate = subJob.startDate;
                        hasMelt = true;
                    }
                    else if (subJob.startDate === element.endDate) {
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
    static generateJob(job) {
        return `
            <div>
                <span>
                    <div>
                        <span class="simplifyWorkPosition">
                            <b>${job.position}</b>
                        </span>
                        ${job.startDate && `: ${Duration.print(job.startDate, job.endDate)}`}
                    </div>
                </span>
            </div>`;
    }
}
