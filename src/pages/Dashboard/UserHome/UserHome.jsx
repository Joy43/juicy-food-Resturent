import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>

      <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">
        {/* avatar  */}
        <div className="relative group">
          <img
            className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full"
            src={user?.photoURL}
            alt="card navigate ui"
          />
          <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
          <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-2xl text-gray-700">
            {" "}
            {user?.displayName ? user.displayName : "Back"}
          </h1>
          <p className="text-gray-400 text-sm">
            {user?.email ? user.email : "blank"}
          </p>
        </div>
        <div className="flex justify-between w-full py-2">
          <div className="text-center space-y-1">
            <p className="text-gray-500">emailVarified</p>
            <p className="text-xl font-mono text-gray-700">
              {user?.emailVerified ? "Yes" : "No"}
            </p>
          </div>
          <div className="text-center space-y-1 ">
            <p className="text-gray-500">Anonymouse</p>
            <p className="text-xl font-mono text-gray-700">
              <p> {user.isAnonymous ? "Yes" : "No"}</p>
            </p>
          </div>
          <div className="text-center space-y-1 ">
            <p className="text-gray-500">Followers</p>
            <p className="text-xl font-mono text-gray-700">11</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 pb-2">
          <p>Last Sign In Time: {user.lastSignInTime}</p>
          <p>Creation Time: {user.creationTime}</p>
        </div>

        <div className="flex justify-between gap-4 py-2"></div>
        <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserHome;
