import blackLogo from '../../assets/black-knight.svg'
import whiteLogo from '../../assets/white-knight.svg'
import { Colors, FigureNames } from '../../shared/consts/consts'
import type { Cell } from '../cell/cell'
import { Figure } from './figure'

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)

		this.logo = color === Colors.WHITE ? whiteLogo : blackLogo
		this.name = FigureNames.KNIGHT
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}

		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)

		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
	}
}
