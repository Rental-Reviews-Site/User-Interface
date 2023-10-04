## Design System

- [ ] finish and add lofi mockups to repo: [x] mobile [ ] desktop
- [ ] finish and add hifi mockups to repo: [ ] mobile [ ] desktop
- [x] finish and add [x] user flows and [x] personas to repo
- [ ] design and add [x] colors [x] typography [ ] spacing [ ] components
- [ ] create custom svgs
- [ ] create custom background images
- [ ] add assets: [ ] svgs and [ ] background images
- [ ] setup and perform design system testing in Figma

## Testing in Development

- [ ] Vitest
- [ ] Jest
- [ ] Thunder Client

## JavaScript Framework

- [x] list needed components
- [ ] chart pages and page requirements (refer to design system mockups)

### SSR & Kit

- [ ] create JSON schema
- [ ] plan API endpoints
- [x] outline page routing [see below](#routing)
- [ ] setup error handling with error page
- [ ] add page loading features

- [ ] user login ...
- [ ] use oauth or do username and pass?
- [ ] what is being used instead of cookies?

## Styling

- [ ] confirm [x] Sass, [ ] PostCSS, [ ] PurgeCSS are installed and setup correctly
- [x] add SCSS boilerplate to src/lib/scss
- [x] list components that need styling (see above in JavaScript Framework)
- [ ] style basic page layout
- [x] list pages for styling: [ ] home page, [ ] find address page, [ ] add details page, [ ] address profile page, [ ] new address profile page, [ ] filter results page, [ ] browse addresses page

## Accessibility

- [ ] add i18n
- [ ] add other language options
- [ ] research progressive web app features
- [ ] add visibly hidden button

---

#### routing

Flow 1:
/
/search
/search/:id
/search/:id/add-review

Flow 1B:
/search/new
/search/new/add-review (<- slug? depends when we are generating new DB entry?)

Flow 2:
/
/see-reviews (similar to /search)
/see-reviews/:id
/rental-info/:id

Flow 3:
/
/filter
/filter/:slug/browse
(thumbnails can link to page /rental-info/:id)

Other:
/about (export const csr = false;)
/share
/login
/login/:slug
/contact

Notes: 'house' and 'new' are not user-friendly words. Non-recorded home might be old, also 'house' implies a particular kind of strcuture, but 'home page' has other meaning as well. Use 'rental' instead of house/home? so /rental/:id
(A old woman once said to me, while taking down my information, "Do you live in an apartment or a home?")
