/* Dynamisk candlestick bakgrund */
body, html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    text-align: center;
    height: 100%;
    background: black;
    color: white;
    overflow: hidden;
    position: relative;
}

/* Candlestick animation */
@keyframes candleMove {
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-100%);
    }
}

/* Bakgrund för candlesticks */
.background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: url('candlestick-pattern.png') repeat-y;
    opacity: 0.2;
    animation: candleMove 20s linear infinite;
}

/* Header */
header {
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
}

/* Coinbilden som snurrar */
.coin-wrapper {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
}

.coin-image {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Gör bilden rund */
    animation: spin 4s linear infinite; /* Snurra bilden */
}

/* Snurrande animation */
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Copy Address knapp */
button {
    display: block;
    margin: 20px auto 10px;
    padding: 10px 20px;
    background: #ff9900;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

button:hover {
    background: #ff6600;
}

/* Social media links */
.social-links {
    margin-top: 30px;
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.social-links img {
    width: 40px;
    transition: transform 0.2s;
}

.social-links img:hover {
    transform: scale(1.2);
}

/* Footer */
footer {
    margin-top: 20px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
}

.ticker {
    font-weight: bold;
    font-size: 1.2em;
}

/* Contract address section */
.ca-section {
    margin-top: 20px;
    text-align: center;
}
