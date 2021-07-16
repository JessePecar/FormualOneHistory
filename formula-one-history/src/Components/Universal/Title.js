import Card from './Card.js'

const Title = ({children, pageTitle}) => {
    return (
        <div className="flex flex-wrap m-12 w-full">
            <h1 className="mb-6 text-left font-bold text-gray-800"><span className="border-b border-gray-300 pb-2">{pageTitle}</span></h1>
            <Card placeholder="Search for team or driver...">
                {children}
            </Card>
        </div>
    );
}

export default Title;