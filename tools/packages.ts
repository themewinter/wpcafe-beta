/**
 * External Dependencies
 */
import * as lucidIcons from "lucide-react";
import * as reactForm from "react-hook-form";
import * as zod from "zod";
import * as zodResolver from "@hookform/resolvers/zod";
/**
 * Internal dependencies
 */
import * as components from "@/common/components";
import * as icons from "@/common/icons";
import * as globalConstant from "@/globalConstant";
import * as helpers from "@/helpers";
import * as shadcnComponents from "@/shadcn/components/ui";
import * as sonnerComponents from "sonner";
import * as hooks from "@/common/hooks";

if (window.wpCafe) {
    window.wpCafe["components"] = {
        ...components,
        ...shadcnComponents,
        ...sonnerComponents,
    };
    window.wpCafe["wcfIcons"] = icons;
    window.wpCafe["globalConstant"] = globalConstant;
    window.wpCafe["helpers"] = helpers;
    window.wpCafe["lucidIcons"] = lucidIcons;
    window.wpCafe["hooks"] = hooks;
    window.wpCafe["reactForm"] = { ...reactForm, ...zod, ...zodResolver };
}
