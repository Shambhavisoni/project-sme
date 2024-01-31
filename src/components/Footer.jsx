import React from 'react';

function Footer() {
  return (
    <footer>
        <div class="footer">
            <section>
                <p><img src="img/logo.png" alt="LEVIOOSA" /></p>
                <p> <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p></p>
            </section>

            <section>
                <p class="title">OTHER LINKS</p>
                <p><a href="#">Ticket</a></p>
                <p><a href="#">Terms & Conditions</a></p>
                <p><a href="#">Cookie Policy</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </section>

            <section>
                <p class="title">SHORT CUT</p>
                <p><a href="https://codepen.io/MAHESHBYL/details/mdOmWZG">Contact Us</a></p>
                <p><a href="#">Services</a></p>
                <p><a href="#">About Us</a></p>
                <p><a href="#">Our Fields</a></p>
            </section>

            <section>
                <p class="title">News Letter</p>
                <p><input type="email"placeholder="Email*" required /><button type="submit"><i class="fa fa-paper-plane"></i></button></p>
                <p><a title="Address, Country, Pincode"><i class="fa fa-map-marker"></i></a> <a href="#"><i class="fa fa-phone"></i></a> <a href="#"><i class="fa fa-envelope"></i></a></p>
            </section>
                <div class="sub-footer">
                Copyright © 2021 LEVIOOSA, All Right Reserved || Designed By: Mahesh
                </div>
        </div>
    </footer>
  )
}

export default Footer;