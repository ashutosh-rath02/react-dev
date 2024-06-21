const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/rathashutosh/" target="_blank">
        Ashutosh Rath
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};
export default Footer;
