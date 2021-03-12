import './Testimonials.scss';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
    return (
        <section className="testimonials">
            <TestimonialCard
                image="https://picsum.photos/800/400?random=0"
                copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates libero ad magni atque animi hic! Itaque, ad? Ex quod possimus aliquam veritatis fugiat voluptates voluptatibus magni deleniti ratione facere?"/>
            <TestimonialCard
                image="https://picsum.photos/800/400?random=1"
                copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates libero ad magni atque animi hic! Itaque, ad? Ex quod possimus aliquam veritatis fugiat voluptates voluptatibus magni deleniti ratione facere?"/>
            <TestimonialCard
                image="https://picsum.photos/800/400?random=2"
                copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates libero ad magni atque animi hic! Itaque, ad? Ex quod possimus aliquam veritatis fugiat voluptates voluptatibus magni deleniti ratione facere?"/>
        </section>
    )
}