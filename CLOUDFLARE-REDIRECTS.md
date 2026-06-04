# Cloudflare redirects for the Kickstarter launch

The canonical page lives at `https://veynqor.com/kickstarter` (built into this app).
Two redirects point at it. Both are set in **Cloudflare**, not in the app, so you can
flip them at launch in one place without a deploy.

Cloudflare dashboard path: **Rules -> Redirect Rules -> Create rule**.

---

## 1. Short link: veynqor.com/ks  ->  /kickstarter

A clean, memorable short link for social bios and printed material. It carries any
UTM query string through to the destination.

- **Rule name:** ks short link
- **When incoming requests match:**
  - Field: `URI Path`  Operator: `equals`  Value: `/ks`
  (Optionally also match `/ks/` by using `Hostname eq veynqor.com and (URI Path eq "/ks" or URI Path eq "/ks/")` in the expression editor.)
- **Then... Type:** Dynamic
- **Expression:** `concat("https://veynqor.com/kickstarter", http.request.uri.query != "" ? concat("?", http.request.uri.query) : "")`
- **Status code:** 307 (Temporary) for now. See "At launch" below.
- **Preserve query string:** on (the dynamic expression above already does this).

---

## 2. Subdomain: kickstarter.veynqor.com  ->  /kickstarter

First make sure the subdomain resolves: add a proxied DNS record so Cloudflare can act on it.

- **DNS:** add a `CNAME` (or `A`) record for `kickstarter` pointing anywhere valid
  (e.g. CNAME `kickstarter` -> `veynqor.com`), **Proxy status: Proxied (orange cloud)**.
  The redirect rule intercepts the request before origin, so the target only needs to exist.

Then the rule:

- **Rule name:** kickstarter subdomain
- **When incoming requests match:**
  - Field: `Hostname`  Operator: `equals`  Value: `kickstarter.veynqor.com`
- **Then... Type:** Static (pre-launch) or Dynamic (to preserve path/query)
- **URL:** `https://veynqor.com/kickstarter`
- **Status code:** 307 (Temporary) for now.

---

## At launch (July 4, 2026)

When the live Kickstarter campaign URL exists, change **both** rules to point at it and
switch the status code to **301 (Permanent)**:

- Change the destination from `https://veynqor.com/kickstarter` to your live campaign URL,
  e.g. `https://www.kickstarter.com/projects/veynqor/v-drive`.
- Change `307` to `301`.

Tip: keep them 307 until you are certain of the final campaign URL. A 301 is cached hard by
browsers, so do not set it until the destination is final.

---

## Quick test

```
curl -sI https://veynqor.com/ks | grep -i location
curl -sI https://kickstarter.veynqor.com | grep -i location
```

Both should return the destination in the `location:` header.
