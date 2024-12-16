import ServiceProvider from "@/core/context/service/service.provider";
import React from "react";

function ContactLayout({ children }: { children: React.ReactNode }) {
	return (
		<ServiceProvider>
			<div className="pt-32">{children}</div>
		</ServiceProvider>
	);
}

export default ContactLayout;
