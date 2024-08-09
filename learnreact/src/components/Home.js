import React from 'react'

function Home() {
    const cardstyle = {
        width: '25%',
        border: '1px solid black',
        padding: '30px'
    }
  return (
    <div style={{padding: '50px'}}>
      <h1>Home</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, obcaecati, officia, cum minus quaerat nemo reiciendis cumque ratione consectetur explicabo commodi aliquam eos vel voluptatem libero quibusdam dolor ea illo. Minima quibusdam fuga veniam maiores? Animi ex qui suscipit a esse ipsa minus earum voluptate ullam quibusdam? Rerum, deserunt adipisci esse non quasi temporibus laboriosam eaque dolore id unde recusandae et a ullam, dolores accusantium error corporis quas eius, laborum assumenda dignissimos nihil iure. Veritatis assumenda labore amet, natus numquam repellendus, quia eius hic tenetur atque voluptate voluptatum! Nostrum sint nulla soluta cumque sunt animi minus omnis delectus ab totam. Deleniti quis, impedit harum iste ut iusto sequi pariatur ullam ratione explicabo unde voluptatem eaque temporibus voluptatibus sed dolores asperiores rerum, soluta esse quas accusamus maxime reprehenderit. Molestiae, est ex sunt culpa iure eum fuga odit dolor, eveniet quo voluptatem, voluptatum ipsam sint laudantium aspernatur. Culpa vitae magnam rerum modi qui numquam vero id ipsa, dolores, sapiente atque odit sunt possimus ex? Sed quae, numquam officiis fuga, fugiat asperiores ullam itaque tempora quaerat vel quas accusantium nisi! Aspernatur, vitae corrupti cupiditate officiis neque, nulla minima ad distinctio laudantium tenetur unde nostrum dolore adipisci maxime blanditiis numquam in. Dolor, ut voluptates!
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '50px'}}>
      <div style={cardstyle}>
        <h2>Card 1</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias non velit consectetur quas minima iste laborum distinctio blanditiis corrupti magni nisi tempore eum ullam vel vitae ad itaque iure voluptate, error voluptatem quasi dolore illo pariatur. Illum quia incidunt, et veritatis sunt reprehenderit veniam labore maiores asperiores inventore neque?</div>
      </div>
      <div style={cardstyle}>
        <h2>Card 2</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias non velit consectetur quas minima iste laborum distinctio blanditiis corrupti magni nisi tempore eum ullam vel vitae ad itaque iure voluptate, error voluptatem quasi dolore illo pariatur. Illum quia incidunt, et veritatis sunt reprehenderit veniam labore maiores asperiores inventore neque?</div>
      </div>
      <div style={cardstyle}>
        <h2>Card 2</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus alias non velit consectetur quas minima iste laborum distinctio blanditiis corrupti magni nisi tempore eum ullam vel vitae ad itaque iure voluptate, error voluptatem quasi dolore illo pariatur. Illum quia incidunt, et veritatis sunt reprehenderit veniam labore maiores asperiores inventore neque?</div>
      </div>
      </div>
    </div>
  )
}

export default Home
