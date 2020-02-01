import React from "react";
import icon1 from "./u_dash_icon1.png";
import icon2 from "./u_dash_icon2.png";
import icon3 from "./u_dash_icon3.png";
import icon4 from "./u_dash_icon4.png";
import icon5 from "./menu_dash_icon.png";
import icon6 from "./menu_icon_profile.png";
import icon7 from "./menu_icon_restriction.png";
import icon8 from "./menu_icon_appointment.png";
import icon9 from "./menu_icon_history.png";
import icon10 from "./menu_icon_family.png";
import icon11 from "./menu_icon_review.png";
import icon12 from "./menu_icon_wallet.png";
import icon13 from "./menu_icon_notifications.png";
import icon14 from "./menu_icon_logout.png";
import img1 from "./news_img1.jpg";
import "./dash.css";

// import "./App.css";

function Dashboard() {
  return (
    <div class="main1">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 col-sm-12 col1">
            <div class="fx">
              <ul
                style={{
                  listStyle: "none",
                  // paddingInlineStart: "0",
                  // textAlign: "center"
                  fontSize: "14px",
                  color: "darkblue"
                  // width: "19%"
                }}
                class="ul1"
              >
                <li
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    borderBottom: "1px solid darkblue"
                  }}
                >
                  <img src={icon5} alt="dash-icon5" class="dash1"></img>
                  DASHBOARD
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon6} alt="dash-icon5" class="dash1"></img>MY
                  PROFILE
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon7} alt="dash-icon5" class="dash1"></img>MY
                  PRESCRIPTION
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon8} alt="dash-icon5" class="dash1"></img>MY
                  APPOINTMENTS
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon9} alt="dash-icon5" class="dash1"></img>MY
                  HISTORY
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon10} alt="dash-icon5" class="dash1"></img>MY
                  FAMILY
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon11} alt="dash-icon5" class="dash1"></img>MY
                  REVIEWS
                </li>
                <li
                  style={{
                    borderBottom: "1px solid darkblue"
                    // textAlign: "center"
                    // display: "flex"
                  }}
                  class="li-1"
                >
                  <img src={icon12} alt="dash-icon5" class="dash1"></img>MY
                  PAYMENTS AND WALLET
                </li>
                <li style={{ borderBottom: "1px solid darkblue" }}>
                  <img src={icon13} alt="dash-icon5" class="dash1"></img>MY
                  NOTIFICATION
                </li>
                <li>
                  <img src={icon14} alt="dash-icon5" class="dash1"></img>LOGOUT
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9 col-sm-12 col2">
            <div class="row row111">
              <div class="col-md-8 col-sm-12 col-lg-5">
                <div style={{ display: "inline-flex" }} class="card card1">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <img
                        src={icon1}
                        alt="dash-icon1"
                        // style={{ height: "115px" }}
                      ></img>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <h2 style={{ fontSize: "1.7rem", display: "flex" }}>
                        Meet a doctor
                      </h2>
                      <p>Book appointments</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "inline-flex" }} class="card card1">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <img src={icon3} alt="dash-icon1"></img>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <h2 style={{ fontSize: "1.7rem", display: "flex" }}>
                        Find a Hospital
                      </h2>
                      <p>Book appointment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-12 col-lg-5">
                <div style={{ display: "inline-flex" }} class="card card1">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <img src={icon2} alt="dash-icon1"></img>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <h2 style={{ fontSize: "1.7rem", display: "flex" }}>
                        Consult online
                      </h2>
                      <p>Chat with a Physician</p>
                    </div>
                  </div>
                </div>
                <div style={{ display: "inline-flex" }} class="card card1">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <img src={icon4} alt="dash-icon1"></img>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <h2 style={{ fontSize: "1.7rem", display: "flex" }}>
                        Consult online
                      </h2>

                      <p>Book appointment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-12 col-lg-2 cstm">
                <div class="card card2" style={{ marginRight: "-24px" }}>
                  <div style={{ color: "white", fontSize: "1.6rem" }}>
                    Get<br></br>
                    <h2 style={{ color: "red", display: "flex" }}>Mediflic</h2>
                    <h2 class="l-blue">Plus</h2>
                    <button type="button" class="btn btn1">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-md-12 col-sm-12"
                style={{ marginTop: "3%", marginBottom: "3%" }}
              >
                <h3 style={{ color: "darkblue" }} class="h3-2">
                  Ask a Health Question...
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10 col-sm-12 col-lg-9 col3">
                <textarea
                  placeholder="  Write your question here"
                  type="text"
                  name="question"
                  style={{
                    width: "95%",
                    borderRadius: "20px",
                    height: "95%",
                    backgroundColor: "lightgray",
                    marginBottom: "10%"
                  }}
                ></textarea>
              </div>
              <div
                class="col-md-10 col-sm-12 col-lg-3 col4"
                style={{ alignSelf: "center" }}
              >
                <button class="btn btn2"> Start Chat </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 col-sm-12 col-lg-12">
                <h3
                  style={{
                    color: "darkblue",
                    marginTop: "3%",
                    marginBottom: "3%"
                  }}
                  class="h3-1"
                >
                  News and Updates
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-sm-12 col-lg-4">
                <div class="card card3">
                  <div class="row" style={{ fontSize: "small" }}>
                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-7">
                      {/* Satyaki */}
                      <p style={{ color: "white", margin: "5px" }} class="p1"> 
                        20thJanuary2020
                      </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-5">
                      <p style={{ color: "red", margin: "5px" }} class="p1">
                        Psychology
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12">
                      <img src={img1} alt="news" class="img1"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-4">
                <div class="card card3">
                  <div class="row" style={{ fontSize: "small" }}>
                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-7">
                      <p style={{ color: "white", margin: "5px" }} class="p1">
                        20thJanuary2020
                      </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-5">
                      <p style={{ color: "red", margin: "5px" }} class="p1">
                        Psychology
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12">
                      <img src={img1} alt="news" class="img1"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-4">
                <div class="card card3">
                  <div class="row" style={{fontSize: "small"}}>
                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-7">
                      <p style={{ color: "white", margin: "5px" }} class="p1">
                        20thJanuary2020
                      </p>
                    </div>
                    <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-5">
                      <p style={{ color: "red", margin: "5px" }} class="p1">
                        Psychology
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12">
                      <img src={img1} alt="news" class="img1"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
