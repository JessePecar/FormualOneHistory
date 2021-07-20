import Card from './Card.jsx'

const Title = ({children, pageTitle, searchBarText}) => {
    return (
        <div className="flex flex-wrap m-12 w-full">
            <h1 className="mb-6 text-left font-bold text-gray-800"><span className="border-b border-gray-300 pb-2">{pageTitle}</span></h1>
            <Card placeholder={searchBarText}>
                {children}
            </Card>
        </div>
    );
}

export default Title;