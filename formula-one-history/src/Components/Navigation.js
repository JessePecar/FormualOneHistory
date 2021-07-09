

const Navigation = () => {
    return(
        <div className="md:pr-52 lg:pr-64 sm:pr-0">
            <nav className="flex items-start justify-start flex-wrap h-screen bg-red-700 fixed md:w-52 lg:w-64 ">
                <ul class="inline-block text-lg justify-items-start">
                    <li class="mr-1">
                      <a class="h-10 px-12 md:w-52 lg:w-64 bg-white inline-block py-2 text-red-700 hover:bg-red-900 hover:text-gray-200 font-semibold flex justify-start" href="/">Teams</a>
                    </li>
                    <li class="mb-1 ">
                      <a class="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-gray-200 hover:bg-red-900 font-semibold flex justify-start" href="/">Drivers</a>
                    </li>
                    <li class="mb-1">
                      <a class="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-gray-200 hover:bg-red-900 font-semibold flex justify-start" href="/">Schedule</a>
                    </li>
                    <li class="mb-1">
                      <a class="h-10 px-12 md:w-52 lg:w-64 bg-transparent inline-block py-2 text-gray-200 hover:bg-red-900 font-semibold flex justify-start" href="/">Results</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;