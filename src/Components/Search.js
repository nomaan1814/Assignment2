import React, { useState } from 'react'

const Search = () => {
    const [username,setUsername]=useState('');
    const [nuser,setnuser]=useState('');
    const [err,setErr]=useState('');
    const [name,setName]=useState("");
    const [repo,setRepo]=useState("");
    const [avatar,setAvatar]=useState("");
    const [ac_date,setAcdate]=useState("");
    const [gist,setGist]=useState("");
    const [userFind,setUserFind]=useState(false)
    const checkUser=()=>{
        if(username==''){
           setErr('Username is required')
           setUserFind(false)
        }
        else{
            setErr('');
            fetch(`https://api.github.com/users/${username}`)
            .then(res=>res.json())
            .then(data=>{
              if(data.message){
                  setErr(data.message)
              }else{
                setName(data.name)
                setnuser(data.login)
                console.log(data)
                setAvatar(data.avatar_url);
                setRepo(data.public_repos);
                setGist(data.public_gists); 
                let dt=data.created_at.split('T')
                setAcdate(dt[0]);
                setUserFind(true)
              }
            }).catch((err)=>{
              setErr(err.message)
              setUserFind(false)
            })
        }
    }
  return (
    <div>
      <div class="flex w-full md:justify-center justify-center items-end mt-5">
        <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
          <label for="hero-field" class="leading-7 text-sm text-gray-600">Enter github's username</label>
          <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={username} onChange={(e)=>setUsername((e.target.value))} />
        </div>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={checkUser}>Search</button>
      </div>
      { err!='' ?<p className="text-center text-red-600">{err}</p>:''}
       <div class="flex justify-center items-center">
      {userFind ?(<div class="max-w-sm rounded overflow-hidden shadow-lg mt-8 p-4">
  <img class="rounded-full p-4 h-40 mx-auto" src={avatar} alt="Github Pic"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{nuser}</div>
  </div>
  <p className='font-bold text-gray-600'>Name &nbsp;<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{name}</span></p>
  <p className='font-bold text-gray-600'>Public Repos &nbsp;<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{repo}</span></p>
  <p className='font-bold text-gray-600'>Public Gists &nbsp;<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{gist}</span></p>
  <p className='font-bold text-gray-600'>Account created at &nbsp;<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ac_date}</span></p>
</div>):''
}
</div>
      
    </div>
  )
}

export default Search
