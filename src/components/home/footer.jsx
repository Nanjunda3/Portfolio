import "../../cssfiles/footer.css"

function Footer() {
  return <>
  <div className="footer-parent">
    <div className="footermain">
    <div className="left">
    <img src="/navbar/mylogo.png" alt="Logo" />
    <p>No. 648 1<sup>st</sup> Main Road <br></br>Kempegowda Nagar 
    T. Dasarahalli <br></br>Bengaluru 560057
    Karnataka India <br></br> Ph No. (+91) 7892927125
    </p>
    </div>
    <div className="right">
    <div className="right1">

      <img src="/navbar/name1.png" alt="Name"/>
      <p>Home</p>
      <p>Projects</p>
      <p>Education</p>
      <p>Passions</p>
    </div>
    <div className="right2">
    <p>Contact Me</p>
    <div className="social">

    <a href="https://www.linkedin.com/in/sanjay-k-s-36291619a/" target="blank"><img src="/navbar/linkedin.svg" alt="LinkedIn" /></a>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjaysnanjunda@gmail.com&su=Contact%20from%20Your%20Website&body=Hi%20Sanjay,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards," target="_blank"  rel="noopener noreferrer"><img src="/navbar/gmail.svg" alt="Email" /></a>
    <a href="https://wa.me/917892927125" target="_blank" rel="noopener noreferrer"><img src="/navbar/whatsapp.svg" alt="WhatsApp" /></a>
    <a href="https://www.instagram.com/x_sanju._2/" target="blank"><img src="/navbar/insta.svg" alt="Insta" /></a>
    </div>
    </div>
    </div>
    </div>
    </div>
  </>;
}

export default Footer;
