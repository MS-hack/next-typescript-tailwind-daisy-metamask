// Profile.tsx
import { UserProfile } from "../types";
import { useRecoilState } from "recoil";
import { profileState } from "../state/profileState";

const Profile = () => {
  const [user, SetUser] = useRecoilState(profileState);
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi there!</h1>
            <p className="mb-5">Hello, {user.name}</p>
            <div className="avatar">
              <div className="mb-8 rounded-full w-24 h-24">
                <img src={user.photo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
