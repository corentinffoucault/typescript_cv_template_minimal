import feather from 'feather-icons';

export default class IconGenerator {
    public static generate(name: feather.FeatherIconNames, fallback: feather.FeatherIconNames = 'anchor'): string {
        const icon = feather.icons[name] || (fallback && feather.icons[fallback]);
        return icon?.toSvg({ width: 16, height: 16 });
    }
}
