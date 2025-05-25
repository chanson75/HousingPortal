# 🏠 React Housing Search App (Realtor.com API)

This is a bare-bones React app that allows users to search for homes for sale by entering a ZIP code. The app fetches real estate listings using the [Realtor.com API](https://rapidapi.com/apidojo/api/realtor) via [RapidAPI](https://rapidapi.com/).

---

## 🚀 Features

- Search homes for sale by ZIP code
- Filter listings by:
  - Minimum price
  - Maximum price
- Display property details: address, price, number of beds/baths

---

## 🧰 Tech Stack

- React
- Axios
- Realtor.com API (RapidAPI)

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/realtor-search-app.git
cd realtor-search-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Get Your Realtor.com API Key

1. Sign up at [RapidAPI](https://rapidapi.com/)
2. Go to the [Realtor.com API](https://rapidapi.com/apidojo/api/realtor)
3. Subscribe to a free plan
4. Copy your API key

### 4. Configure the API Key

Edit `src/api/realtor.js` and replace:

```javascript
const API_KEY = 'YOUR_RAPIDAPI_KEY';
```

With your actual API key.

---

## 🖥️ Run the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Example Usage

- Enter ZIP code: `90210`
- Enter optional price filters
- Click **Search** to view listings

---

## 📌 Future Improvements

- Add filters for square footage and date listed
- Add pagination and image previews
- Improve UI with Tailwind or Material UI
- Deploy to Vercel or Netlify

---

## 📄 License

This project is licensed under the MIT License.