import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { User, Lock, ArrowRight, UserCircle, Users, Globe } from "lucide-react";
import logo from "@/assets/images/logo.svg";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    if (form.password.length < 8) {
      toast.error(t("auth.signUp.alerts.passwordLength"));
      setLoading(false);
      return;
    }

    // Prevent signing up as admin manually
    if (form.role === "admin") {
      toast.error("You cannot sign up as admin!");
      setLoading(false);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === form.username);

    if (exists) {
      toast.error(t("auth.signUp.alerts.usernameTaken"));
      setLoading(false);
      return;
    }

    const newUser = {
      id: uuid(),
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      password: form.password,
      role: form.role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success(t("auth.signUp.alerts.success"));
    navigate("/auth/sign-in");
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
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
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-md p-8 m-4 bg-card/60 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 ring-1 ring-primary/20">
            <img src={logo} alt="Logo" className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {t("auth.signUp.title")}
          </h2>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {t("auth.signUp.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                name="firstName"
                placeholder={t("auth.signUp.firstNamePlaceholder")}
                value={form.firstName}
                onChange={handleChange}
                required
                className="pl-9 bg-background/50 border-input/60 focus:bg-background transition-all"
              />
            </div>
            <div className="relative">
              <Input
                name="lastName"
                placeholder={t("auth.signUp.lastNamePlaceholder")}
                value={form.lastName}
                onChange={handleChange}
                required
                className="pl-3 bg-background/50 border-input/60 focus:bg-background transition-all"
              />
            </div>
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              name="username"
              placeholder={t("auth.signUp.usernamePlaceholder")}
              value={form.username}
              onChange={handleChange}
              required
              className="pl-9 bg-background/50 border-input/60 focus:bg-background transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              name="password"
              type="password"
              placeholder={t("auth.signUp.passwordPlaceholder")}
              value={form.password}
              onChange={handleChange}
              required
              className="pl-9 bg-background/50 border-input/60 focus:bg-background transition-all"
            />
          </div>

          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
            <Select
              value={form.role}
              onValueChange={(val) =>
                setForm((prev) => ({ ...prev, role: val }))
              }
              required
            >
              <SelectTrigger className="pl-9 bg-background/50 border-input/60 focus:bg-background transition-all w-full">
                <SelectValue placeholder={t("auth.signUp.rolePlaceholder")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="employer">Employer</SelectItem>
              </SelectContent>
            </Select>
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
                {t("auth.signUp.button")} <ArrowRight className="w-4 h-4" />
              </span>
            )}
          </Button>

          <div className="mt-4 text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {t("auth.signUp.hasAccount")}{" "}
              <Link
                to="/auth/sign-in"
                className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                {t("auth.signUp.loginLink")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
