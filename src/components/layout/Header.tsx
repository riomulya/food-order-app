import Card from "../UI/Card";

const Header = ()=>{
    return(
    <div className="relative w-full">
      <div className="relative h-56">
        <img
          src="https://source.unsplash.com/random/600x600/?food"
          className="object-cover w-full h-full"
          alt="food"
        />
        <div className="absolute -bottom-8 left-0 w-full h-1/2 flex justify-center">
          <Card className="w-fit h-fit bg-white p-3 shadow-md">
            <p className="text-center max-w-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut praesentium id quod commodi, saepe aliquam ipsam ea voluptas, eum aspernatur nobis fugiat! Dignissimos hic vero ut libero totam, explicabo consequatur assumenda. Inventore nisi iure tempora praesentium molestiae, doloremque iusto aspernatur, optio labore laboriosam architecto? Numquam tempore recusandae beatae eos architecto.
            </p>
          </Card>
        </div>
      </div>
    </div>
    )
}

export default Header;