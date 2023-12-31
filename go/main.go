package main

import (
	linkedlist "dsa-tutorial/linked-list"
	"fmt"
)

func main() {
	// var stack stack.Stack
	// // Stack
	// stack.Push(1)
	// stack.Push(2)
	// stack.Push(3)
	// stack.Push(4)
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack.Pop())
	// fmt.Println(stack)

	// queue := queue.Queue{Size: 3}
	// queue.Enqueue(1)
	// queue.Enqueue(2)
	// queue.Enqueue(3)
	// _, err := queue.Enqueue(4)
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// fmt.Println(queue.Elements)
	// queue.Dequeue()
	// queue.Dequeue()
	// queue.Dequeue()
	// _, err = queue.Dequeue()
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// fmt.Println(queue.Elements)
	// list := linkedlist.LinkedList{}

	// fmt.Println(list)

	// list.Push(1)

	// list.Push(2)

	// fmt.Println(list.Head.Next.Data == 2) // should be true
	// node, err := list.Pop()
	// if err == nil {
	// 	fmt.Println(node.Data == 2) // should be true
	// } else {
	// 	fmt.Println(err)
	// }
	// list.Pop()
	// _, err = list.Pop()
	// if err != nil {
	// 	fmt.Println(err)
	// }

	// list.Push(1)
	// list.Push(2)

	// list.Shift()

	// fmt.Println(list.Head.Data == 2) // should be true
	// list.Push(3)
	// list.Unshift(1)
	// fmt.Println(list.Head.Data == 1)
	// fmt.Println(list.Get(1).Data) // should be 2
	// list.Set(1, 4)
	// fmt.Println(list.Get(1).Data == 4) // should be true
	// list.Insert(1, 2)
	// fmt.Println(list.Head.Next.Data == 2) // should be true
	// list.Remove(1)
	// fmt.Println(list.Head.Next.Data == 4) // should be true
	// // list is now [1 4 3]
	// list.Reverse()
	// fmt.Println(list.Head.Data == 3) // should be true
	// list.Sort()
	// fmt.Println(list.Display()) // should be 134

	dll := linkedlist.DoublyLinkedList{}
	dll.Push(1)
	dll.Push(2)
	fmt.Println(dll.Head.Next.Data == 2)
	fmt.Println(dll.Head.Next.Prev.Data == 1)
	dll.Push(3)
	dll.Pop()
	fmt.Println(dll.Head.Next.Data == 2)
	fmt.Println(dll.Head.Next.Next == nil)
	dll.Shift()
	fmt.Println(dll.Head.Data == 2)
	dll.Unshift(1)
	fmt.Println(dll.Head.Data == 1)
	dll.Push(3)
	dll.Push(4)
	dll.Push(5)
	fmt.Println(dll.Get(2).Data == 3)
	dll.Set(4, 6)
	fmt.Println(dll.Head.Next.Next.Next.Next.Data == 6)
	dll.Insert(4, 5)
	fmt.Println(dll.Head.Next.Next.Next.Next.Data == 5)
	fmt.Println(dll.Display())
	dll.Remove(5)
	fmt.Println(dll.Head.Next.Next.Next.Next == nil)
	fmt.Println(dll.Display())

}
