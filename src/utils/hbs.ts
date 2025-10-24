import type { HelperOptions } from 'handlebars';

const hbsHelpers = {
    upper(this: unknown, str: string) {
        return String(str ?? '').toUpperCase();
    },
    json(this: unknown, ctx: unknown) {
        return JSON.stringify(ctx, null, 2);
    },
    eq(this: unknown, a: unknown, b: unknown) {
        return a === b;
    },
    when(this: unknown, cond: unknown, options: HelperOptions) {
        return cond ? options.fn(this) : options.inverse(this);
    },
} as const;

export default hbsHelpers;
