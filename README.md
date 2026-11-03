# Win Kids Parent Guide

A phone-friendly guide parents open by scanning a QR code. It shows each class's leo color, the skills
their child is working on (in plain language), why each skill matters, and why progress takes time.

No build step, no database. It's a plain static site, so Vercel hosts it for free.

## Files

| File | What it is |
|---|---|
| `content.js` | **All the class and skill text.** Edit this file to change what parents read. |
| `index.html` | The page itself |
| `app.js` | How the tabs and buttons work |
| `styles.css` | Colors, fonts and layout |
| `qr.html` | A printable sheet of QR codes. It builds the codes from your live web address automatically. |
| `qrcode.js` | The QR code generator used by `qr.html` (MIT license) |

## Put it online (about 10 minutes, no coding)

1. **GitHub:** Sign in at github.com → click **+** (top right) → **New repository**. Name it `winkids-parent-guide`, leave it Public or Private, click **Create repository**.
2. On the new repo page, click **uploading an existing file**. Drag in every file from this folder (unzipped), then click **Commit changes**.
3. **Vercel:** Sign in at vercel.com with your GitHub account → **Add New… → Project** → pick `winkids-parent-guide` → **Import**.
   Leave every setting as it is (Framework Preset: **Other**, no build command) → **Deploy**.
4. Vercel gives you an address like `winkids-parent-guide.vercel.app`. Open it on your phone to check.
5. Go to `your-address/qr` (for example `winkids-parent-guide.vercel.app/qr`) and click **Print QR sheet**.
   There's one code for the whole guide and one per class. Each class code opens straight to that class's tab.

### Optional: use your own domain
In Vercel → your project → **Settings → Domains**, add something like `parents.winkidsgym.com` and follow the DNS steps it shows.
**Do this before printing QR codes**, because the codes contain whatever address you open `/qr` from.

## Making changes

1. On GitHub, open `content.js` → click the pencil icon.
2. Change the words inside the quotes. Keep the quotes, commas and brackets as they are.
3. Click **Commit changes**. Vercel republishes the site within about a minute. The QR codes keep working.

Each skill looks like this:

```js
["Cast", "What parents see her do.", "Why it matters."]
```

Class tabs: `gym-girls`, `cartwheels`, `dynamos`, `spirals`, `preschool`, `more`, `words`, `start`.
A link to one tab looks like `https://your-address/#dynamos`.

## Do I need Supabase?

Not for this version. Everything parents see is the same for every family, so a static site is faster, free, and has nothing to break.

Supabase becomes worth adding if you later want:
- **Coaches editing text from a simple admin screen** instead of GitHub
- **Parent sign-in** to see *their own child's* checked-off skills (this needs care with children's data and parent accounts)
- **Tracking** which classes parents look at most

Google Analytics or Vercel Analytics (Project → **Analytics** → Enable) covers "how many parents are using it" without Supabase.
