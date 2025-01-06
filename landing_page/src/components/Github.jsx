import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  return (
    <div className="container mx-auto my-10 p-11 bg-gray-600 text-white rounded-lg shadow-lg">
      <div className="flex items-center space-x-6">
        <img
          src={data.avatar_url}
          alt="User avatar"
          className="rounded-full w-32 h-32 border-4 border-white"
        />
        <div>
          <h2 className="text-4xl font-semibold mb-2">{data.name}</h2>
          <p className="text-lg">
            GitHub followers:{" "}
            <span className="font-bold">{data.followers}</span>
          </p>
          {data.bio && <p className="mt-2 text-xl">{data.bio}</p>}{" "}
          {/* Conditionally display bio */}
          {data.company && (
            <p className="mt-2 text-xl">
              Current Company: <span className="font-bold">{data.company}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/DivyanshJaiswal04"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
  }
};
