import feather from 'feather-icons';
export default class IconGenerator {
    static generate(name, fallback = 'anchor') {
        const icon = feather.icons[name] || (fallback && feather.icons[fallback]);
        return icon?.toSvg({ width: 16, height: 16 });
    }
}
