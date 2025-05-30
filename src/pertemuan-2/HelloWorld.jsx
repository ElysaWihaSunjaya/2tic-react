export default function HelloWorld(){
    const propsUserCard = {
        nama: "Elysa2",
        nim: "240822",
        tanggal: "2022-08-24"
    }

    return(
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                nama="Elysa"
                nim="2355301058"
                tanggal={new Date().toLocaleDateString()}
            />
            <UserCard{...propsUserCard}/>
            <img src="img/bungaKaca.jpg" alt="logo" />
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam dari Binjai</small>
    )
}

function QuoteText(){
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return(
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return(
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}