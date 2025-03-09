const categoryService = require('./category-service');

const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(
            {
                message: 'Category created',
                success: true,
                data: category
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create category' });
    }
}

const updateCategory = async (req, res) => {
    try {
        const {categoryId} = req.params;
        const category = await categoryService.updateCategory(categoryId, req.body);
        res.status(200).json( {
            message: `updated category in id ${categoryId}`,
            success: true,
            data: category
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update category' });
    }
}

const disableCategory = async (req, res) => {
    try {
        const {categoryId} = req.params;
        const category = await categoryService.disableCategory(categoryId);
        res.status(200).json(
            {
                message: `disabled category in id ${categoryId}`,
                success: true,
                data: category
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to disable category' });
    }
}

const getCategorys = async (req, res) => {
    try {
        const categorys = await categoryService.getCategorys();
        res.status(200).json(
            {
                message: 'Categorys found',
                success: true,
                data: categorys 
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get categorys' });
    }
}

module.exports = {
    createCategory,
    updateCategory,
    disableCategory,
    getCategorys
}