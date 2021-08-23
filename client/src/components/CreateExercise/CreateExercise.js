import './CreateExercise.scss';
import {Link} from 'react-router-dom';
import abs from '../../assets/images/abs.jpg';
import back from '../../assets/images/back.jpg';
import bicep from '../../assets/images/bicep.jpg';
import chest from '../../assets/images/chest.jpg';
import legs from '../../assets/images/legs.jpg';
import shoulders from '../../assets/images/shoulders.jpg';
import tricep from '../../assets/images/tricep.jpg';





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
                tear again and cause soreness as well as gains.<br/><br/>Seeing progress in the mirror is very difficult, since we see ourselves every day
                and cannot perceive very miniscule day-to-day changes. </p>
                </div>
                <div className='create-exercise__text-container--right'>
                    <p className='create-exercise__text'> Progress photos come in
                handy here, but it still can take quite some time to see progress even in photos.
                This can be discouraging. Fear not however, since differences in numbers are much
                more noticable and we can use this to our advantage by quantifying and logging
                workouts. We tend to be able to lift a bit more (either reps or weight) with each subsequent
                visit to the gym. This is why we have included this free <Link to='/log'>Workout Log</Link>, 
                which you can use to track and log your workouts as well as view past workouts
                for comparison and motivation purposes.</p>
                    <p className='create-exercise__text'>To help with ideas for new and different exercises, we have made a workout generator
                for your inspiration. It is simple to use. Just select the muscle category you are
                interested in, and a list of suggested exercises will appear.</p>
                </div>
            </div>    
            
            <div className='create-exercise__generator-title-container'>
                <h2 className='create-exercise__text'>Workout Generator</h2>
                <p className='create-exercise__text'>Please select a muscle category:</p>
            </div>

            <div className='create-exercise__button-container'>
                
                <Link className='create-exercise__link' to={`/category/Chest`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Chest")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={chest} alt='chest muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>CHEST</div>
                </div>
                </div>}
                </Link>

                <Link className='create-exercise__link' to={`/category/Shoulders`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Shoulders")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={shoulders} alt='shoulder muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>SHOULDERS</div>
                </div>
                </div>}
                </Link>

                <Link className='create-exercise__link' to={`/category/Legs`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Legs")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={legs} alt='leg muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>LEGS</div>
                </div>
                </div>}
                </Link>

                <Link className='create-exercise__link' to={`/category/Back`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Back")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={back} alt='back muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>BACK</div>
                </div>
                </div>}
                </Link>

                <Link className='create-exercise__link' to={`/category/Biceps`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Biceps")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={bicep} alt='bicep muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>BICEPS</div>
                </div>
                </div>}
                </Link>

                <Link className='create-exercise__link' to={`/category/Triceps`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Triceps")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={tricep} alt='tricep muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>TRICEPS</div>
                </div>
                </div>}
                </Link>

                <Link className='create-exercise__link' to={`/category/Abs`}>
                {props.updateCategory && <div onClick={() => {
                props.updateCategory("Abs")
                }} className='create-exercise__button-wrapper'>
                <img  className='create-exercise__image' src={abs} alt='ab muscles drawing'/>
                <div className='create-exercise__overlay'>
                    <div className='create-exercise__overlay-text'>ABS</div>
                </div>
                </div>}
                </Link>

            </div>
        </div>
    )
}