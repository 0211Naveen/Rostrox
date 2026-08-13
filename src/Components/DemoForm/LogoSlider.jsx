import "./LogoSlider.css";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Pitti_Engineering_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/4e/Tata_Projects_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Lenskart_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Air_India_logo.svg",
];

export default function LogoSlider() {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="logo-slider mt-5">
      <div className="logo-track">
        {allLogos.map((logo, index) => (
          <div className="logo-card" key={index}>
            <img src={logo} alt="company logo" />
          </div>
        ))}
      </div>
    </div>
  );
}