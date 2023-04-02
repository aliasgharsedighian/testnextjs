"use client";
import "../../../styles/UserProfile.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
  activity,
  userAccountLogged,
} from "../../GlobalRedux/Features/user/userSlice";
import { UserType } from "../../../typing";

type PageProps = {
  params: {
    userId: number;
  };
};

function ProfilePage({ params: { userId } }: PageProps) {
  const user = useSelector(userAccountLogged);
  const userActivity = useSelector(activity);
  return (
    <>
      {userActivity ? (
        <section className="profile-page-container">
          <div className="profile-settings">
            <p>Public profile</p>
            <p>Account settings</p>
            <p>Notfication</p>
            <p>Pro Account</p>
          </div>
          <div className="profile-info">
            <h2>Public profile</h2>
            <div className="profile-picture">
              <img className="shadow-lg" src={user.img} alt="" />
              <div className="profile-picture-btn">
                <button className="profile-change-pic">change picture</button>
                <button className="profile-delete-pic">delete picture</button>
              </div>
            </div>
            <div className="profile-personal-info">
              <div className="profile-fir-las">
                <div className="profile-fir">
                  <label htmlFor="">First name</label>
                  <input type="text" value={user.firstname} />
                </div>
                <div className="profile-las">
                  <label htmlFor="">Last name</label>
                  <input type="text" value={user.lastname} />
                </div>
              </div>
              <div className="profile-other-info">
                <div className="profile--info">
                  <label htmlFor="">Location</label>
                  <input type="text" value={`${user.country} ${user.city}`} />
                </div>
                <div className="profile--info">
                  <label htmlFor="">Profession</label>
                  <input type="text" value={"Front-end Developer"} />
                </div>
                <div className="profile-bio-info">
                  <label htmlFor="">Bio</label>
                  <input type="text" value={"open source designer"} />
                </div>
                <h3>Online presence</h3>

                <div className="profile---info">
                  <img src="/images/social/dribbble.png" alt="" />
                  <input type="text" value={"https://. . ."} />
                </div>
                <div className="profile---info">
                  <img src="/images/social/instagram.jpg" alt="" />
                  <input type="text" value={"https://. . ."} />
                </div>
                <div className="bottom-profile-btn">
                  <a href="#">+ Add other</a>
                  <button>Save</button>
                </div>
                <div className="profile-delete-account">
                  <button>Delete your account</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="profile-not-login">
          <p>
            you aren't login yet. please <b>Sign up</b> or <b>Sign in</b> first
          </p>
          <Link href="/login-page">
            <button>Sign in</button>
          </Link>
          <Link href="/sign-up">
            <button>Sign up</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ProfilePage;
