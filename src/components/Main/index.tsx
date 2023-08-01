import React, { DragEvent } from 'react'
import styles from './Main.module.scss'


export const Main = () => {
  const array = [];
  //const {handleClick, active} = React.useContext(WindowContext)
  class DragDrop{
    public element: any;
    static handleDrag(event: DragEvent){
      //this.element = event.currentTarget
    }
    static handleDrop(event: DragEvent){
      //event.target.appendChild(this.element)
    }
    static init(){
      this.handleDrag = this.handleDrag.bind(this)
      this.handleDrop = this.handleDrop.bind(this)
    }
  }
  const clientX = window.screen.width
  DragDrop.init()
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            {/* <MyProjects id='my-projects' data-point='my-projects' handleDrag={DragDrop.handleDrag} onClick={handleClick}/> */}
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            {/* <About id='about' data-point='about' handleDrag={DragDrop.handleDrag} onClick={handleClick}/> */}
          </div>
          {
            clientX > 600 &&
            <>
              
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
            </>
          }
        </div>

        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            {/* <Tech id='tech' data-point='tech' handleDrag={DragDrop.handleDrag} onClick={handleClick}/> */}
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            {/* <Contact id='contact' data-point='contact' handleDrag={DragDrop.handleDrag} onClick={handleClick}/> */}
          </div>
          {
            clientX > 600 &&
            <>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
            </>
          }
        </div>
        <div className={styles.row}>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            {/* <SoftSkills id='soft-skills' data-point='soft-skills' handleDrag={DragDrop.handleDrag} onClick={handleClick}/> */}
          </div>
          <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}>
            {/* <Curriculum id='curriculum' data-point='curriculum' handleDrag={DragDrop.handleDrag} onClick={handleClick}/> */}
          </div>
          {
            clientX > 600 &&
            <>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
            </>
          }
        </div>
        {
            clientX > 600 &&
            <>
              <div className={styles.row}>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
            </div>
            <div className={styles.row}>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
            </div>
            <div className={styles.row}>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
              <div onDrop={DragDrop.handleDrop} onDragOver={(e) => e.preventDefault()}></div>
            </div>
            </>
          }
        
          {/* {active['my-projects'] && <WinProject />}
          {active.about && <WinAbout /> }
          {active.tech && <WinTech />}
          {active.contact && <WinContacts />}
          {active['soft-skills'] && <WinSoftSkills />}
          {active.curriculum && <WinCurriculum />} */}
      </div>
    </main>
  )
}
