export default function robots() {
    const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL || 'https://ssinstagram.online';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}