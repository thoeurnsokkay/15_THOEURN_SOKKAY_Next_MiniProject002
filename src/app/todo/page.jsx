import { redirect } from "next/navigation";
import { auth } from "../../../auth";
import CardComponent from "@/components/card";
import { getAllWorkspaces } from "../../../service/cotegory-service";
import Link from "next/link";
import { Star, MoreVertical } from "lucide-react";

export default async function Todo() {
  const res = await getAllWorkspaces();
  const { payload: workspaces } = res;

  console.log("workspace ", res);
  console.log("res ", res);

  // export default async function todo() {
  const session = await auth();
  console.log("session: ", session);

  if (!session?.token) {
    redirect: "/login";
  } else {
    redirect: "/todo";
  }

  const tasks = [
    { id: 1, name: "HRD Design", color: "bg-red-500", bold: true },
    { id: 2, name: "Website Design", color: "bg-blue-500", bold: false },
    { id: 3, name: "Mobile Design", color: "bg-green-500", bold: false },
    { id: 4, name: "Spring Boot", color: "bg-purple-500", bold: false },
  ];

  const favorites = [{ id: 1, name: "HRD Design", color: "red-500" }];

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/*  */}

        <div className="hidden md:flex flex-col w-80 bg-amber-50 rounded-2xl">
          <div className="flex flex-col flex-1 overflow-y-auto">
            <h1 className="font-bold text-5xl text-center py-15">
              Plan<span className="text-watermelon-red">I</span>t{" "}
            </h1>
            <p className=" flex justify-between font-bold px-5">
              Workspace
              <button className="text-gray-500 hover:text-black text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-plus-icon lucide-square-plus"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </button>
            </p>

            <div className="w-full max-w-md mx-auto rounded-lg p-4">
              <ul>
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex justify-between items-center py-3 border-b last:border-none"
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`w-3 h-3 rounded-full ${task.color}`}
                      ></span>
                      <span
                        className={
                          task.bold
                            ? "font-bold text-lg"
                            : "font-normal text-lg"
                        }
                      >
                        {task.name}
                      </span>
                    </div>
                    <button className="text-gray-500 hover:text-black text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-ellipsis-icon lucide-ellipsis"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full p-4 rounded-lg ">
              {/* Header */}
              <div className="flex justify-between items-center text-gray-500 font-semibold mb-2">
                <span>Favorite</span>
                <Star className="w-5 h-5 text-gray-400" />
              </div>

              {/* List Items */}
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-2"
                >
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 bg-${item.color} rounded-full`} />
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-30 px-10">
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4"
                />
              </svg>
              <span className="font-bold">Logout</span>
            </a>
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col flex-1 px-15 overflow-y-auto">
          <div className="flex items-center justify-between h-16  border-b border-gray-200">
            <div className="flex items-center px-4">
              <div className="relative mx-auto text-gray-600 flex">
                <div className="flex">
                  <div className=" mr-20">Work space</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right-icon lucide-chevron-right"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                  <div>HRD Design</div>
                </div>

                <button
                  type="submit"
                  className="absolute left-0 top-0 mt-3 mr-4"
                ></button>
              </div>
            </div>
            {/* notification */}
            <div className="flex items-center space-x-4 mr-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.429 2.413a.75.75 0 0 0-1.13-.986l-1.292 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.056-2.718a3.25 3.25 0 0 1 .801-2.069z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95H11V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.206 3.95l.221 3.534a7.376 7.376 0 0 0 1.308 3.754a1.617 1.617 0 0 1-1.135 2.529l-3.407.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.135-2.528a7.377 7.377 0 0 0 1.308-3.754zm4.206-2.45a2.714 2.714 0 0 0-2.709 2.544l-.22 3.534a8.877 8.877 0 0 1-1.574 4.516a.117.117 0 0 0 .082.183l3.737.449c1.489.178 2.993.178 4.482 0l3.737-.449a.117.117 0 0 0 .082-.183a8.876 8.876 0 0 1-1.573-4.516l-.221-3.534a2.714 2.714 0 0 0-2.709-2.544zm1.557 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M17.643 1.355a.75.75 0 0 0-.072 1.058l1.292 1.48a3.25 3.25 0 0 1 .8 2.07l.057 2.717a.75.75 0 0 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072"
                  />
                </svg>
              </a>
              {/* parametre */}
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                  />
                </svg>
              </a>
              {/* logout */}
              {/* <a
                href="#"
                className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 11h8v2H5v3l-5-4l5-4zm-1 7h2.708a8 8 0 1 0 0-12H4a9.985 9.985 0 0 1 8-4c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4"
                  />
                </svg>
                <span className="font-bold">Logout</span>
              </a> */}
            </div>
          </div>
          <div className="flex p-4 justify-between mt-10">
            <h2 className="font-bold">HRD Design</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-star-icon lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </div>
          {/*  */}

          <div className="p-4 grid grid-cols-3 gap-10">
            {workspaces.map((workspaces) => (
              <div key={workspaces.name}>
                <div className=" leading-loose ">
                  <div className="text-red-400">
                    <p>Not Started</p>
                    <hr />
                  </div>
                  <CardComponent />
                </div>
              </div>
            ))}

            {/* <div className="bg-amber-100 w-1/3"> <CardComponent/></div>
          <div className="bg-indigo-300 w-1/3"> <CardComponent/></div>  */}
          </div>
        </div>
      </div>
    </>
  );
}
