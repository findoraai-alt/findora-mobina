"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const countries = [
  { id: 1, country: "India" },
  { id: 2, country: "USA" },
  { id: 3, country: "UK" },
  { id: 4, country: "Australia" },
  { id: 5, country: "Canada" },
  { id: 6, country: "Germany" },
  { id: 7, country: "France" },
];

const employees = [
  { id: 1, employees: "1-10" },
  { id: 2, employees: "11-50" },
  { id: 3, employees: "51-100" },
  { id: 4, employees: "101-500" },
  { id: 5, employees: "500+" },
];

const platforms = [
  { id: 1, platform: "Web" },
  { id: 2, platform: "Mobile" },
  { id: 3, platform: "Desktop" },
  { id: 4, platform: "Cloud" },
  { id: 5, platform: "IoT" },
];

const Demo = () => {
  const [dropdowns, setDropdowns] = useState({
    country: false,
    employees: false,
    platforms: false,
  });

  const [selected, setSelected] = useState({
    country: "",
    employees: "",
    platforms: "",
    firstName: "",
    lastName: "",
    email: "",
    caseDetails: "",
  });

  const dropdownRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdowns({ country: false, employees: false, platforms: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      country: false,
      employees: false,
      platforms: false,
      [dropdown]: !prev[dropdown],
    }));
  };

  const selectOption = (dropdown: keyof typeof selected, value: string) => {
    setSelected((prev) => ({ ...prev, [dropdown]: value }));
    setDropdowns({ country: false, employees: false, platforms: false });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: Record<string, boolean> = {};
    Object.keys(selected).forEach((key) => {
      if (!selected[key as keyof typeof selected]) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="px-4 md:px-8 py-20 md:py-24">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h6 className="text-5xl font-medium">
            Unlock AI-Powered Efficiency with Findora
          </h6>
          <span className="text-lg">
            Request a demo and discover how {"Findora's"} secure and private AI
            solutions can drive productivity and innovation for your business.
          </span>
          <ul className="text-lg">
            <li>
              ✔ Explore how {"Findora’s"} AI models adapt to your unique
              enterprise needs
            </li>
            <li>
              ✔ Identify the optimal deployment options for your organization
            </li>
            <li>
              ✔ Learn how Findora seamlessly integrates AI into your workflow
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2">
          <form
            className="flex flex-col gap-8 bg-white dark:bg-[#111828] h-auto p-8 rounded-2xl"
            action=""
            ref={dropdownRef}
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="First Name*"
                className="w-full border p-2 bg-[#f5f5ff] dark:bg-[#202938] placeholder-black dark:placeholder-white"
                onChange={(e) =>
                  setSelected({ ...selected, firstName: e.target.value })
                }
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name*"
                onChange={(e) =>
                  setSelected({ ...selected, lastName: e.target.value })
                }
                className="w-full border p-2 bg-[#f5f5ff] dark:bg-[#202938] placeholder-black dark:placeholder-white"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Business Email*"
                onChange={(e) =>
                  setSelected({ ...selected, email: e.target.value })
                }
                className="w-full border p-2 bg-[#f5f5ff] dark:bg-[#202938] placeholder-black dark:placeholder-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>

            {/* Country Dropdown */}
            <div className="relative w-full">
              <div
                onClick={() => toggleDropdown("country")}
                className="border p-2 cursor-pointer bg-[#f5f5ff] dark:bg-[#202938]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">
                    {selected.country || "Country / Region*"}
                  </span>
                  {dropdowns.country ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
              </div>
              {dropdowns.country && (
                <div className="absolute z-20 top-12 left-0 right-0 bg-[#f5f5ff] dark:bg-[#202938] rounded-lg shadow-2xl">
                  {countries.map((country) => (
                    <div
                      key={country.id}
                      className="p-2 cursor-pointer hover:bg-white dark:hover:bg-black"
                      onClick={() => selectOption("country", country.country)}
                    >
                      {country.country}
                    </div>
                  ))}
                </div>
              )}
              {errors.country && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>

            {/* Employees Dropdown */}
            <div className="relative z-10 w-full">
              <div
                onClick={() => toggleDropdown("employees")}
                className="border p-2 cursor-pointer bg-[#f5f5ff] dark:bg-[#202938]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">
                    {selected.employees || "Number of Employees*"}
                  </span>
                  {dropdowns.employees ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
              </div>
              {dropdowns.employees && (
                <div className="absolute top-12 left-0 right-0 bg-[#f5f5ff] dark:bg-[#202938] rounded-lg shadow-2xl">
                  {employees.map((emp) => (
                    <div
                      key={emp.id}
                      className="p-2 cursor-pointer hover:bg-white dark:hover:bg-black"
                      onClick={() => selectOption("employees", emp.employees)}
                    >
                      {emp.employees}
                    </div>
                  ))}
                </div>
              )}
              {errors.employees && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>

            {/* Platforms Dropdown */}
            <div className="relative z-0 w-full">
              <div
                onClick={() => toggleDropdown("platforms")}
                className="border p-2 cursor-pointer bg-[#f5f5ff] dark:bg-[#202938]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">
                    {selected.platforms ||
                      "What Platform Do You Prefer Using*?"}
                  </span>
                  {dropdowns.platforms ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </div>
              </div>
              {dropdowns.platforms && (
                <div className="absolute top-12 left-0 right-0 bg-[#f5f5ff] dark:bg-[#202938] rounded-lg shadow-2xl">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className="p-2 cursor-pointer hover:bg-white dark:hover:bg-black"
                      onClick={() =>
                        selectOption("platforms", platform.platform)
                      }
                    >
                      {platform.platform}
                    </div>
                  ))}
                </div>
              )}
              {errors.platforms && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>
            <div>
              <textarea
                cols={30}
                rows={7}
                placeholder="Tell Us More About Your Case*"
                className="w-full border p-2 bg-[#f5f5ff] dark:bg-[#202938] placeholder-black dark:placeholder-white"
                onChange={(e) =>
                  setSelected({ ...selected, caseDetails: e.target.value })
                }
              ></textarea>
              {errors.caseDetails && (
                <p className="text-red-500 text-sm">This field is required*</p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <input type="checkbox" />
              <span className="text-sm">
                I agree to receiving email communications from Findora.
              </span>
            </div>

            <button className="text-xl bg-purple-500 hover:bg-purple-600 transition-all rounded-full px-4 py-2 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Demo;
