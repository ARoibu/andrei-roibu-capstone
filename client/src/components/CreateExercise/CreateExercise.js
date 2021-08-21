import './CreateExercise.scss';
import {Link} from 'react-router-dom';
export default function CreateExercise(props) {
    return(
        <div className='create-exercise'>
            <div className='create-exercise__text-container'>
                <div className='create-exercise__text-container--left'>
                    <p className='create-exercise__text'>Welcome to Do U Even Lift.</p> 
                    <p className='create-exercise__text'>Whether you are new to lifting or
                experienced, this app will help you make your fitness goals a reality.
                The dreaded progress plateau is a harsh reality of lifting endeavours
                everywhere, and we know firsthand how discouraging it can be.</p>
                    <p className='create-exercise__text'>The human body is an extremely adaptable machine and can get used to your
                regular gym routine within a matter of time. We all have our go-to favourite
                exercises, but sometimes what all we need in order to smash through the plateau
                is simply to switch it up. This will throw off your body enough for muscles to
                tear again and cause soreness as well as gains. </p>
                </div>
                <div className='create-exercise__text-container--right'>
                    <p className='create-exercise__text'>Seeing progress in the mirror is very difficult, since we see ourselves every day
                and cannot perceive very miniscule day-to-day changes. Progress photos come in
                handy here, but it still can take quite some time to see progress even in photos.
                This can be discouraging. Fear not however, since differences in numbers are much
                more noticable and we can use this to our advantage by quantifying and logging
                workouts. We tend to be able to lift a bit more (either reps or weight) with each subsequent
                visit to the gym. This is why we have included this free <Link>Workout Log</Link>, 
                which you can use to track and log your workouts as well as view past workouts
                for comparison and motivation purposes.</p>
                    <p className='create-exercise__text'>To help with ideas for new and different exercises, we have made a workout generator
                for your inspiration. It is simple to use. Just select the muscle category you are
                interested in, and a list of suggested exercises will appear.</p>
                </div>
            </div>    

            <h2 className='create-exercise__text'>Workout Generator</h2>
            <p className='create-exercise__text'>Please select a muscle category:</p>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Chest")
            }} className='create-exercise__image' src='http://cdn.shopify.com/s/files/1/0038/0878/8544/articles/FeaturedImage_PulledChestMuscle.jpg?v=1592870496' alt='chest muscles drawing'/>}
            </div>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Shoulders")
            }} className='create-exercise__image' src='https://www.sportsinjuryclinic.net/wp-content/uploads/2018/08/shoulder-pain800-800x426.jpg' alt='shoulder muscles drawing'/>}
            </div>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Triceps")
            }} className='create-exercise__image' src='https://i.shgcdn.com/c39f9e9e-8e0a-4fa9-9ead-7ab7c3415c9d/-/format/auto/-/preview/3000x3000/-/quality/lighter/' alt='triceps muscles drawing'/>}
            </div>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Back")
            }} className='create-exercise__image' src='https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5fd24b8aca69b1ab783290f8_hwYEbGij-iDlBzmrySBuACZL5sCcvTecFOExhg20NIXFyTQ9Q55fzhXIDSiMNesu5mXBOSrHysn3h57LjwtdKrBnUKb_SUy0Fmy6E0ZRTIdF0naix0TLZkNxnkIbhlrsJY4bb6bb.png' alt='back muscle diagram'/>}
            </div>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Biceps")
            }} className='create-exercise__image' src='https://chiroyogaalignment.com/wp-content/uploads/2021/01/Biceps-Muscles-1024x754-1.jpg' alt='biceps muscle drawing'/>}
            </div>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Legs")
            }} className='create-exercise__image' src='https://1xw7c62t8pgj1bq3qetvvsg1-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Leg-Muscles-Running.jpg' alt='leg muscles drawing'/>}
            </div>

            <div>
            {props.updateCategory && <img onClick={() => {
                props.updateCategory("Abs")
            }} className='create-exercise__image' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/six-pack-anatomy-1555515082.jpg?crop=1xw:1xh;center,top&resize=480:*' alt='chest muscles drawing'/>}
            </div>
        
        </div>
    )
}