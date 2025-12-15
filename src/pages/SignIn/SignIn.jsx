import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Lock, ArrowRight, Globe } from "lucide-react";
import logo from "@/assets/images/logo.svg";
import { toast } from "sonner";

const SignIn = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Initialize static admin if not present
  const initAdmin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const adminExists = users.find((u) => u.username === "stepfree2025");
    if (!adminExists) {
      users.push({
        id: "admin-id",
        username: "stepfree2025",
        password: "12345678",
        role: "admin",
        firstName: "Admin",
        lastName: "User",
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  initAdmin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === form.username && u.password === form.password
    );

    if (!user) {
      toast.error(
        t("auth.signIn.alerts.userNotFound") ||
          "Username not found or wrong password."
      );
      setLoading(false);
      return;
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success(t("auth.signIn.alerts.welcomeBack"));

    if (user.role === "admin") navigate("/admin/dashboard");
    else if (user.role === "employer") navigate("/employer/dashboard");
    else navigate("/main");
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-background overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-4 right-4 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const newLang = i18n.language === "en" ? "ar" : "en";
            i18n.changeLanguage(newLang);
            document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
          }}
          className="rounded-full w-10 h-10 hover:bg-background/80"
        >
          <Globe className="w-5 h-5" />
        </Button>
      </div>
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-md p-8 m-4 bg-card/60 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 ring-1 ring-primary/20">
            <img src={logo} alt="Logo" className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("auth.signIn.title")}
          </h2>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {t("auth.signIn.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="space-y-1">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                name="username"
                placeholder={t("auth.signIn.usernamePlaceholder")}
                value={form.username}
                onChange={handleChange}
                required
                className="pl-10 h-11 bg-background/50 border-input/60 focus:bg-background transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                name="password"
                type="password"
                placeholder={t("auth.signIn.passwordPlaceholder")}
                value={form.password}
                onChange={handleChange}
                required
                className="pl-10 h-11 bg-background/50 border-input/60 focus:bg-background transition-all"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-2 text-base font-medium shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
          >
            {loading ? (
              t("common.loading")
            ) : (
              <span className="flex items-center gap-2">
                {t("auth.signIn.button")} <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            {t("auth.signIn.noAccount")}{" "}
            <Link
              to="/auth/sign-up"
              className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              {t("auth.signIn.registerLink")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
