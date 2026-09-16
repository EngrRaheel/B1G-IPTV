# B1G Player site customization

The values you are most likely to change are centralized in `lib/site.ts`:

- `whatsappNumber`: digits only, including country code
- `email`: customer-support email address
- `telegramUrl`: full Telegram link
- `url`: production domain used by canonical URLs, sitemap, and robots
- `deviceImageUrl`: featured device image

Page text and pricing are also easy to edit:

- Plans and shared FAQs: `lib/site.ts`
- Blog articles: `lib/blogs.ts`
- Home page: `app/page.tsx`
- Reseller page: `app/b1g-iptv-reseller-panel/page.tsx`
- Installation guide: `app/b1g-iptv-installation-guide/page.tsx`
- Player app page: `app/b1g-iptv-player-app-latest-version-for-android-firestick/page.tsx`
- Contact page: `app/contact-b1g-iptv/page.tsx`
- Shared styling: `app/globals.css`

The contact form opens the visitor's email application. Connect it to your preferred API or form service later if you want server-side submissions.
