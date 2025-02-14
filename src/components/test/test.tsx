import styles from './test.module.css'

const Test = () =>
{
    const products = [
        { id: 1, name: "Laptop", categories: ["Electronics", "Computers"] },
        { id: 2, name: "Phone", categories: ["Electronics", "Mobile"] },
        { id: 3, name: "Keyboard", categories: ["Computers", "Accessories"] }
      ];
    
    const flattenProductsArray = [...new Set(products.map(p => p.categories).flat())]



    return (<div className={styles['test-wrapper']}>
        <section>
        <header>
        <h2>
            This is an testing area to try out stuff
        </h2>
        </header>
        <p>
            {flattenProductsArray + " "}
            </p>
    </section>
        </div>
    )
}

export {Test}