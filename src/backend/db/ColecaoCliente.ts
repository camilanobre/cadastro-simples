import { getFirestore, collection, doc, setDoc, getDoc, addDoc, deleteDoc, getDocs, query, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import { firebaseApp } from "../config";

export default class ColecaoCliente implements ClienteRepositorio {
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options);
            return new Cliente(dados.nome, dados.idade, snapshot.id);
        }
    }
    
    async salvar(cliente: Cliente): Promise<Cliente> {
        const firestore = getFirestore(firebaseApp);
        if(cliente?.id) {
            await setDoc(doc(firestore, 'clientes', cliente.id).withConverter(this.#conversor), cliente);
            return cliente;
        } else {
            const docRef = await addDoc(collection(firestore, 'clientes').withConverter(this.#conversor), cliente);
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        const firestore = getFirestore(firebaseApp);
        return deleteDoc(doc(firestore, 'clientes', cliente.id));
    }

    async obterTodos(): Promise<Cliente[]> {
        const firestore = getFirestore(firebaseApp);
        const querySnapshot = await getDocs(query(collection(firestore, 'clientes').withConverter(this.#conversor)));
        return querySnapshot.docs.map(doc => doc.data()) ?? [];
    }

    private colecao() {
        const firestore = getFirestore(firebaseApp);
        return collection(firestore, 'clientes').withConverter(this.#conversor);
    }
}
