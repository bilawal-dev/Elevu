"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import ButtonLoader from "@/components/Common/ButtonLoader";
import { useAuth } from "@/context/AuthContext";

export default function RegisterForm() {
    const [formData, setFormData] = useState({ companyName: "", email: "", password: "" });
    // const [userType, setUserType] = useState<"COMPANY" | "EMPLOYEE">("EMPLOYEE");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const { registerCompany } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const { companyName, email, password } = formData;
        await registerCompany(companyName, email, password);
        setFormData({ companyName: "", email: "", password: "" });
        setIsLoading(false);
    };


    return (
        <section className="pt-32 pb-16 flex items-center justify-center px-[20px] py-16">
            <div className="w-full max-w-md bg-white rounded-2xl border shadow-sm p-8">
                <h2 className="text-3xl whitespace-nowrap font-bold text-center text-gray-900 mb-8">
                    Register Company
                </h2>

                <form onSubmit={handleSubmit}>
                    {/* Company Name */}
                    <div className="mb-5">
                        <label htmlFor="companyName" className="block text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            id="companyName"
                            name="companyName"
                            type="text"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-brand transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-brand transition"
                        />
                    </div>

                    {/* Password with toggle */}
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full pr-10 px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-brand transition"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-4 top-1/2 translate-y-1 flex items-center text-gray-400"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    {/* Register As */}
                    {/* <div className="mb-8">
                        <label className="block text-gray-700 mb-2">Register As:</label>
                        <div className="grid grid-cols-2 bg-red-50 rounded-full overflow-hidden">
                            <button
                                type="button"
                                onClick={() => setUserType("EMPLOYEE")}
                                className={`py-2 text-center font-medium ${userType === "EMPLOYEE"
                                    ? "bg-brand text-white"
                                    : "text-brand hover:bg-red-100"
                                    }`}
                            >
                                Employee
                            </button>
                            <button
                                type="button"
                                onClick={() => setUserType("COMPANY")}
                                className={`py-2 text-center font-medium ${userType === "COMPANY"
                                    ? "bg-brand text-white"
                                    : "text-brand hover:bg-red-100"
                                    }`}
                            >
                                Company
                            </button>
                        </div>
                    </div> */}

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 rounded-full font-semibold text-white shadow-md transition ${isLoading
                            ? "bg-brand/60  cursor-not-allowed"
                            : "bg-brand hover:bg-brand/90"
                            }`}
                    >
                        {isLoading ? <ButtonLoader /> : "Register"}
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link href="/login" className="text-brand hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </section>
    );
}
