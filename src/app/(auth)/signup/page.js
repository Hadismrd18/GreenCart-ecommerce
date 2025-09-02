"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import { useForm } from "react-hook-form";
export default function page() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      isSeller: false,
      isCustomer: false,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const newData = {
        ...data,
        isCustomer: data.isCustomer && true,
        isSeller: data.isSeller && true,
      };
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const data_res = await res.json();
      console.log(data_res);
    } catch (error) {
      console.log(error);
    }

    reset();
    // submit the form using the specified api
  };

  return (
    <div className="pt-10 bg-[#4fbf8b23] rose-gradient relative min-h-screen overflow-hidden">
      <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-2">
        <motion.div
          className="hidden flex-1 items-center justify-center space-y-8 p-8 text-center md:flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <img
                src={assets.logo.src}
                alt="Illustration"
                className="mx-auto h-auto w-full md:w-90"
              />
            </motion.div>
            {/* <motion.h1
              className="text-2xl md:text-4xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              The make money app
            </motion.h1> */}
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          className="flex flex-1 items-center justify-center p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="border-border/70 bg-card/20 w-full max-w-md shadow-[0_10px_26px_#e0e0e0a1] backdrop-blur-lg dark:shadow-none">
              <CardContent className="space-y-6 p-8">
                {/* Logo and Header */}
                <motion.div
                  className="space-y-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold tracking-tight md:text-4xl">
                      Sign Up
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Create an account or log in to discover Purgions and find
                    ways to make money.
                  </p>
                </motion.div>
                <form
                  className="flex flex-col gap-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* Name Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input
                      {...register("name", {
                        required: "Name is required",
                      })}
                      id="name"
                      type="text"
                    />
                    {errors.name && (
                      <p style={{ color: "red" }}>{errors.name.message}</p>
                    )}
                  </motion.div>
                  {/* Email Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email", {
                        required: "Email is required",
                      })}
                      id="email"
                      type="email"
                    />
                    {errors.name && (
                      <p style={{ color: "red" }}>{errors.name.message}</p>
                    )}
                  </motion.div>
                  {/* Password Input */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      className="border-border border"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                  </motion.div>
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="space-y-2 flex gap-2 items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      <Label htmlFor="isSeller">Sign up as a seller</Label>
                      <Input
                        id="isSeller"
                        type="radio"
                        className="size-3 border-border border"
                        {...register("isSeller")}
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2 flex gap-2 items-center justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      <Label htmlFor="isCustomer">Sign up as a customer</Label>
                      <Input
                        id="isCustomer"
                        type="radio"
                        className="size-3 border-border border"
                        {...register("isCustomer")}
                      />
                    </motion.div>
                  </div>
                  {/* Continue Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full">
                      Continue
                    </Button>
                  </motion.div>
                </form>
                {/* Divider */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="border-border w-full border-t"></div>
                  </div>
                </motion.div>

                <div className="flex items-center justify-center gap-1">
                  <span>Already have an Account?</span>
                  <Link href="/login" className="underline">
                    Login
                  </Link>
                </div>

                {/* Terms */}
                <motion.p
                  className="text-muted-foreground mt-2 text-center text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                >
                  By signing in you agree to our{" "}
                  <Link
                    prefetch={false}
                    href="#"
                    className="text-muted-foreground hover:text-primary underline"
                  >
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link
                    prefetch={false}
                    href="#"
                    className="text-muted-foreground hover:text-primary underline"
                  >
                    privacy policy
                  </Link>
                  .
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
