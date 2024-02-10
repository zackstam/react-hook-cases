import Avatar from "./Avatar";
import Link from "./Link";
import NavigationBar from "./NavigationBar";
import PageLayout from "./PageLayout";

const user = {
    name: 'Zakuan',
    nim: 11610026,
}
function Page() {
    const userLink = (
        <NavigationBar user={user}>
            <Link user={user}>
                <Avatar user={user}/>
            </Link>
        </NavigationBar>
    );
    return (
        <div>
            <h3>Page</h3>
            <PageLayout userLink={userLink}/>
        </div>
    );
}

export default Page;