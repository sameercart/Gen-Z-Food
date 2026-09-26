const SUPABASE_URL='https://arszshkwlxykbczaroth.supabase.co';
const SUPABASE_KEY='sb_publishable_Vto5woad8mxjXf6LoWXpxw_rahrJQ8R';
const db=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
const base='https://sameercart.github.io/Gen-Z-Food/';
const el=id=>document.getElementById(id);
const say=(id,msg)=>el(id).textContent=msg;
