# Shelly Auto (No Supabase)

A beginner-friendly React + Vite demo shop for car spare parts. It includes 20 sample products, search and category filters, a hamburger menu, cart quantities/removal, demo account registration/login, checkout, printable receipt, order history, and a local product management screen.

## Run it
1. Extract this ZIP.
2. Open the `shelly-auto` folder in VS Code.
3. Open Terminal in VS Code.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Important demo limitations
- No Supabase or other backend is used. Products, demo accounts, cart and orders are saved in the current browser's `localStorage`.
- This is suitable for learning and a school/demo project, not a real store. Local browser accounts are not secure, and admin controls are not protected.
- Checkout creates a demo order and receipt only. It does not charge M-Pesa or a bank card. Real payments, secure authentication, shared online orders and secure admin access require a backend/payment provider later.
- Product photos load from Unsplash, so an internet connection is needed for those photos.
