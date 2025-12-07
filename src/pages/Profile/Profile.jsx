import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Shield, Briefcase, Calendar, Edit, Camera, Upload, Trash2, Lock, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useRef } from "react";

const Profile = () => {
    const { t } = useTranslation();
    // State for user data
    const [user, setUser] = useState(() => JSON.parse(sessionStorage.getItem("loggedInUser") || "null") || {});

    // State for edit dialog
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        profileImage: ""
    });

    // State for password dialog
    const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [passwordError, setPasswordError] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState("");

    const fileInputRef = useRef(null);

    const displayUser = {
        firstName: user.firstName || t("profilePage.guest"),
        lastName: user.lastName || t("profilePage.user"),
        email: user.email || "guest@example.com",
        role: user.role || "User",
        profileImage: user.profileImage,
        password: user.password || "password123", // Fallback password for demo
        ...user
    };

    const handleEditClick = () => {
        setFormData({
            firstName: displayUser.firstName,
            lastName: displayUser.lastName,
            profileImage: displayUser.profileImage || ""
        });
        setIsEditDialogOpen(true);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, profileImage: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setFormData(prev => ({ ...prev, profileImage: "" }));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };


    const handleSave = () => {
        const updatedUser = { ...user, ...formData };
        sessionStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setIsEditDialogOpen(false);
        window.dispatchEvent(new Event("userUpdated"));
    };

    const handleSavePassword = () => {
        setPasswordError("");
        setPasswordSuccess("");

        if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
            setPasswordError("All fields are required"); // Fallback if HTML5 validation fails/is bypassed
            return;
        }

        if (passwordData.currentPassword !== displayUser.password) {
            setPasswordError(t("profilePage.incorrectPassword"));
            return;
        }

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setPasswordError(t("profilePage.passwordMismatch"));
            return;
        }

        // Simulate password update
        const updatedUser = { ...user, password: passwordData.newPassword };
        sessionStorage.setItem("loggedInUser", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setPasswordSuccess(t("profilePage.passwordUpdated"));

        // Clear inputs after success
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });

        // Auto close after delay
        setTimeout(() => {
            setIsPasswordDialogOpen(false);
            setPasswordSuccess("");
        }, 1500);
    };

    return (
        <div className="container mx-auto py-10 px-4 md:px-6 fade-in animate-in duration-500">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-background to-muted/50 border border-border/50 shadow-sm">
                    <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center text-4xl font-bold text-primary shadow-inner ring-4 ring-background overflow-hidden relative">
                            {displayUser.profileImage ? (
                                <img src={displayUser.profileImage} alt={t("profilePage.profileAlt")} className="w-full h-full object-cover" />
                            ) : (
                                displayUser.firstName?.[0]?.toUpperCase()
                            )}
                        </div>
                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background" title={t("profilePage.active")}></div>
                    </div>

                    <div className="text-center md:text-start space-y-2 flex-1">
                        <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            {displayUser.firstName} {displayUser.lastName}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground">
                            <span className="flex items-center gap-1.5 text-sm">
                                <Mail className="w-4 h-4" />
                                {displayUser.email}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                <Shield className="w-3.5 h-3.5" />
                                {t(`profilePage.role_${displayUser.role}`, displayUser.role)}
                            </span>
                        </div>
                    </div>
                    <div className="md:ml-auto">
                        <div className="md:ml-auto flex flex-col gap-2 w-full md:w-auto">
                            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button className="gap-2 shadow-lg hover:shadow-xl transition-all w-full md:w-auto" onClick={handleEditClick}>
                                        <Edit className="w-4 h-4" />
                                        {t("profilePage.editProfile")}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>{t("profilePage.editProfileTitle")}</DialogTitle>
                                        <DialogDescription>
                                            {t("profilePage.editProfileDesc")}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="flex flex-col items-center gap-4">
                                            <div
                                                className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border cursor-pointer group"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                {formData.profileImage ? (
                                                    <img src={formData.profileImage} alt={t("profilePage.previewAlt")} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full bg-muted flex items-center justify-center">
                                                        <User className="w-8 h-8 text-muted-foreground" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Camera className="w-6 h-6 text-white" />
                                                </div>
                                            </div>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="gap-2"
                                                    onClick={() => fileInputRef.current?.click()}
                                                >
                                                    <Upload className="w-4 h-4" />
                                                    {t("profilePage.changePicture")}
                                                </Button>
                                                {formData.profileImage && (
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="gap-2"
                                                        onClick={handleRemoveImage}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                        {t("profilePage.removePicture")}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="edit-firstName" className="text-right">
                                                {t("profilePage.firstName")}
                                            </Label>
                                            <Input
                                                id="edit-firstName"
                                                value={formData.firstName}
                                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="edit-lastName" className="text-right">
                                                {t("profilePage.lastName")}
                                            </Label>
                                            <Input
                                                id="edit-lastName"
                                                value={formData.lastName}
                                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={handleSave}>{t("profilePage.saveChanges")}</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <Dialog open={isPasswordDialogOpen} onOpenChange={(open) => {
                                setIsPasswordDialogOpen(open);
                                if (!open) {
                                    setPasswordError("");
                                    setPasswordSuccess("");
                                    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
                                }
                            }}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="gap-2 shadow-sm hover:shadow-md transition-all w-full md:w-auto">
                                        <Lock className="w-4 h-4" />
                                        {t("profilePage.changePassword")}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>{t("profilePage.changePasswordTitle")}</DialogTitle>
                                        <DialogDescription>
                                            {t("profilePage.changePasswordDesc")}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="grid gap-4 py-4">
                                        {passwordError && (
                                            <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
                                                {passwordError}
                                            </div>
                                        )}
                                        {passwordSuccess && (
                                            <div className="bg-green-100 text-green-700 text-sm p-3 rounded-md flex items-center gap-2">
                                                <Check className="w-4 h-4" />
                                                {passwordSuccess}
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <Label htmlFor="current-password">{t("profilePage.currentPassword")}</Label>
                                            <Input
                                                id="current-password"
                                                type="password"
                                                value={passwordData.currentPassword}
                                                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="new-password">{t("profilePage.newPassword")}</Label>
                                            <Input
                                                id="new-password"
                                                type="password"
                                                value={passwordData.newPassword}
                                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="confirm-password">{t("profilePage.confirmPassword")}</Label>
                                            <Input
                                                id="confirm-password"
                                                type="password"
                                                value={passwordData.confirmPassword}
                                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <DialogFooter>
                                        <Button variant="outline" onClick={() => setIsPasswordDialogOpen(false)}>{t("profilePage.cancel")}</Button>
                                        <Button onClick={handleSavePassword}>{t("profilePage.updatePassword")}</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
                <Separator className="bg-border/60" />

                <div className="grid gap-6 md:grid-cols-2">
                    {/* Personal Information */}
                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <User className="w-5 h-5 text-primary" />
                                {t("profilePage.personalInfo")}
                            </CardTitle>
                            <CardDescription>{t("profilePage.personalInfoDesc")}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">{t("profilePage.firstName")}</Label>
                                    <Input
                                        id="firstName"
                                        value={displayUser.firstName}
                                        readOnly
                                        className="bg-muted/30 focus-visible:ring-primary/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">{t("profilePage.lastName")}</Label>
                                    <Input
                                        id="lastName"
                                        value={displayUser.lastName}
                                        readOnly
                                        className="bg-muted/30 focus-visible:ring-primary/20"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">{t("profilePage.email")}</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        value={displayUser.email}
                                        readOnly
                                        className="pl-9 bg-muted/30 focus-visible:ring-primary/20"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Account Details */}
                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                                <Briefcase className="w-5 h-5 text-primary" />
                                {t("profilePage.accountOverview")}
                            </CardTitle>
                            <CardDescription>{t("profilePage.accountOverviewDesc")}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="space-y-2">
                                <Label>{t("profilePage.accountRole")}</Label>
                                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                                    <div className="p-2 bg-background rounded-full shadow-sm">
                                        <Shield className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold">{displayUser.role}</span>
                                        <span className="text-xs text-muted-foreground">{t("profilePage.systemPermission")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>{t("profilePage.memberStatus")}</Label>
                                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                                    <div className="p-2 bg-background rounded-full shadow-sm">
                                        <Calendar className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-green-600">{t("profilePage.active")}</span>
                                        <span className="text-xs text-muted-foreground">{t("profilePage.accountVerified")}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Profile;
