// import Header from "./header/Header";
import Form from "@/components/form/Form";
import SidebarContainter from "@/components/sidebar/SidebarContainer";
import {maxWidth} from "./globalVal";

const Layout = (): JSX.Element => {
    return (
        <div className="flex flex-row min-h-screen">
            <section className="min-w-[750px]">
                <SidebarContainter/>
            </section>
            <section className="min-w-[550px] flex">
                <div className='justify-self-center'>
                    <Form/>
                </div>
            </section>
        </div>
    );
};
export default Layout;
