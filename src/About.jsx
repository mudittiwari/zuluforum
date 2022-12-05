import about from './assets/about.png';
function About()
{
    return (
        <>
            <div className="w-full flex items-center">
                <div className="w-3/5 mt-10 px-8">
                <h1 className="text-3xl font-bold">
                    About Us
                </h1>
                <h1 className="text-base mt-3 font-semibold">
                Public problem solution:
(Jan vikaas samaadhaan)
                </h1>
                <p  className="text-xs mt-3 font-medium">I don't believe in bending the law in order to achieve the desired results. Everything can be acquired within the system if done in an appropriate manner. I am working with the public, for the public and to the public but I'll always remain lawful.</p>
                <p  className="text-xs mt-3 font-medium">Our Public needs to know what's within the curtains. A proper system must be established to provide the public with the actual schemes and agendas. Transparency should be there for the public with the government. There must not be any kind of mistreatment knowingly or unknowingly.</p>
                <p  className="text-xs mt-3 font-medium">The youth of our country is still not proper directed and this becomes the reason for our country's undermined growth. The unemployment is my topmost priority to be dealt. I am always in support of our youth and always there to guide them in case of any wrong or mistaken decision. All of this will be conquered with proper steps and unity of our people.</p>
                <p  className="text-xs mt-3 font-medium">The public problems will be treated with certain such activities:</p>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-5 text-black px-3 mb-3'>Active suggestions</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Periodic reviews</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Silent remarks</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Transparent functioning</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Call support</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Government schemes</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Surveys and questions</h1>
                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-sm font-semibold mt-0 text-black px-3 mb-3'>Etc.</h1>
                <h1 className="text-base mt-3 font-semibold">The people are my power and I am their servant.</h1>
                </div>
                <div className='w-2/5 mt-10 flex flex-col justify-center items-center'>
                    <img src={about} alt="" />
                    <div className='w-28 mt-3 text-center font-bold'>Mudit Tiwari</div>
                </div>
            </div>
        </>
    );
}
export default About;