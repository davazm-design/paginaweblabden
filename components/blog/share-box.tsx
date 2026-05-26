"use client";

import { Button } from "@/components/ui/button";
import {
    Facebook,
    Twitter,
    Send,
    Mail,
    MessageCircle
} from "lucide-react";

interface ShareBoxProps {
    title: string;
    slug: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://labden.com.mx";

export function ShareBox({ title, slug }: ShareBoxProps) {
    // URL canónica construida sin window.location (evita hydration mismatch + setState-in-effect).
    const url = `${SITE_URL}/blog/${slug}`;

    const handleShare = (platform: string) => {
        let shareUrl = "";
        const text = encodeURIComponent(title);
        const encodedUrl = encodeURIComponent(url);

        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`;
                break;
            case "whatsapp":
                shareUrl = `https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`;
                break;
            case "telegram":
                shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${text}`;
                break;
            case "email":
                window.location.href = `mailto:?subject=${text}&body=${encodedUrl}`;
                return;
        }

        if (shareUrl) {
            window.open(shareUrl, "_blank", "width=600,height=400");
        }
    };

    return (
        <div className="border border-border bg-card rounded-xl p-8 md:p-12 text-center relative overflow-hidden group shadow-sm mt-16">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
            <h3 className="text-orange-600 dark:text-orange-500 font-bold mb-8 text-xl">
                ¿Te sirvió este artículo? Compártelo con un colega
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
                <Button
                    onClick={() => handleShare("facebook")}
                    className="bg-[#1877F2] hover:bg-[#1559B2] text-white border-0 shadow-sm h-10 px-6 gap-2"
                >
                    <Facebook size={18} /> Facebook
                </Button>

                <Button
                    onClick={() => handleShare("twitter")}
                    className="bg-black hover:bg-zinc-800 text-white border-0 shadow-sm h-10 px-6 gap-2"
                >
                    <Twitter size={18} /> X
                </Button>

                <Button
                    onClick={() => handleShare("whatsapp")}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white border-0 shadow-sm h-10 px-6 gap-2"
                >
                    <MessageCircle size={18} /> WhatsApp
                </Button>

                <Button
                    onClick={() => handleShare("telegram")}
                    className="bg-[#0088CC] hover:bg-[#006699] text-white border-0 shadow-sm h-10 px-6 gap-2"
                >
                    <Send size={18} /> Telegram
                </Button>

                <Button
                    onClick={() => handleShare("email")}
                    className="bg-[#EA4335] hover:bg-[#B92B1B] text-white border-0 shadow-sm h-10 px-6 gap-2"
                >
                    <Mail size={18} /> Email
                </Button>
            </div>
        </div>
    );
}
