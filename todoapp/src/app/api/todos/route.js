import {db} from '@/app/lib/db.js';
import { NextResponse } from 'next/server';

export async function GET(){
    const [rows]= await db.query("SELECT * FROM todos");
    return NextResponse.json(rows);
}

export async function POST(req){
    const {title}=await req.json();
    await db.query("INSERT INTO todos (title) VALUES (?)",[title]);
    return NextResponse.json({message:"Todo added"})
}

export async function DELETE(req){

    const {id}=await req.json();
    await db.query("DELETE FROM todos WHERE id=?", [id]);
    return NextResponse.json({message:"Todo deleted"})

  
}

export async function PUT(req){
    const {title,completed,id}=await req.json();
    await db.query("UPDATE todos SET title=?,completed=? WHERE id=?",[title,completed,id])

}

