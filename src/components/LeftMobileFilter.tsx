import React from 'react'
import { MobileSortActive } from '../context'
import { addSelectedBrands } from '../store/features/Brands.Slice';
import { setCurrentPage } from '../store/features/Device.Slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import c from '../styles/LeftMobileFilter.module.scss'



export default function LeftMobileFilter() {

    const brandsStore = useAppSelector(state => state.brandReducer)

    const menuState = React.useContext(MobileSortActive)

    const brands = useAppSelector(state => state.brandReducer)

    const [checkedList, setCheckedList] = React.useState<[] | string[]>([]);

    const dispacth = useAppDispatch()

    function handleSelect(event: any) {
        const value = event.target.value;
        const isChecked = event.target.checked;

       

        if (isChecked) {

            setCheckedList([...checkedList, value]);


        } else {

            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);

        }

    };


    React.useEffect(() => {
        dispacth(addSelectedBrands(checkedList))

        //reset page
        dispacth(setCurrentPage(1))
    }, [checkedList])



    return (
        <div className={menuState.active ? c.menu_active : c.menu}>
            <div className={c.content}>
                <button onClick={menuState.handleMenuState} className={c.close__button}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>



                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <p className="title">Select Brand</p>
                        </div>
                        <div className="card-body">
                            {brandsStore.loading ?
                                null
                                :
                                brandsStore.currentType.brands?.map((item, index) =>

                                    <div key={item} className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            name="languages"
                                            value={item}
                                            onClick={handleSelect}
                                        />
                                        <label>{item}</label>
                                    </div>

                                )}
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
